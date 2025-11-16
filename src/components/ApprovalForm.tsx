import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  comments: z.string().min(1, { message: "Пожалуйста, добавьте комментарий" }).max(2000, { message: "Комментарий не должен превышать 2000 символов" }),
});

type FormData = z.infer<typeof formSchema>;

const ApprovalForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:3000/api/send-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comments: data.comments,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send comment");
      }

      toast({
        title: "Комментарий отправлен",
        description: "Ваши комментарии успешно отправлены на согласование.",
      });

      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке. Пожалуйста, попробуйте снова.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-card border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ваши комментарии
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Фаза II - Согласование
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-muted-foreground">
            Пожалуйста, оставьте свои комментарии и подтвердите согласование Фазы II стратегического маркетингового анализа
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Textarea
              {...register("comments")}
              placeholder="Введите ваши комментарии и предложения здесь..."
              className="min-h-[200px] bg-background border-border focus:border-gold transition-colors resize-none"
              disabled={isSubmitting}
            />
            {errors.comments && (
              <p className="text-sm text-destructive mt-2">{errors.comments.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gold hover:bg-gold-light text-background font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              {isSubmitting ? "Отправка..." : "Отправить на согласование"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApprovalForm;
