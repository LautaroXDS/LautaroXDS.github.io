document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const targetId = question.getAttribute('data-target');
      const answer = document.getElementById(targetId);

      // Ocultar todas las respuestas excepto la seleccionada
      document.querySelectorAll('.faq-answer').forEach(ans => {
        if (ans.id !== targetId) {
          ans.classList.remove('open');
        }
      });

      // Alternar la visibilidad de la respuesta seleccionada
      answer.classList.toggle('open');
    });
  });