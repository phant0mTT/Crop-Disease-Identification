export const getRecommendation = async (data) => {
  const res = await fetch("http://localhost:8080/api/recommend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};
