const getDate = () => {
  const date = new Date();
  const dateOfCreation = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return dateOfCreation;
};

export default getDate;
