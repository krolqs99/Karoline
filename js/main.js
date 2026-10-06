/* ==========================================================================
   SISTEMA KQ DESIGN — INTERATIVIDADE DO FAQ & AMBIENTE (ETAPA 08)
   Garante funcionamento do acordeão e comportamento de navegação fluida.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      const currentAnswer = question.nextElementSibling;

      // Fecha todas as outras respostas abertas para manter o layout limpo
      faqQuestions.forEach(otherQuestion => {
        if (otherQuestion !== question) {
          otherQuestion.setAttribute('aria-expanded', 'false');
          const otherAnswer = otherQuestion.nextElementSibling;
          if (otherAnswer) {
            otherAnswer.style.maxHeight = null;
          }
        }
      });

      // Alterna o estado do item selecionado
      if (isExpanded) {
        question.setAttribute('aria-expanded', 'false');
        currentAnswer.style.maxHeight = null;
      } else {
        question.setAttribute('aria-expanded', 'true');
        currentAnswer.style.maxHeight = currentAnswer.scrollHeight + 'px';
      }
    });
  });
});
