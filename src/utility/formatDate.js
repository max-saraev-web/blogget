const formatDate = date => {
  try {
    const d = date * 1000;
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };

    const formatedDate = new Intl.DateTimeFormat('ru', options)
      .format(new Date(d));

    if (!formatedDate) {
      throw new Error(`Дата когда был создан комментарий не прошла`);
    };

    return formatedDate;
  } catch (e) {
    console.warn(`Ошибка при форматировании даты ${date}: ${e.message}`);
  }
};

export default formatDate;
