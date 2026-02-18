export default function RecommendationResult({ data }) {
  if (!data) return null;
  if (data.message) return <p className="text-red-500">{data.message}</p>;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-green-600 mb-2">Recommended Fertilizers</h3>
        <ul className="list-disc list-inside space-y-1">
          {data.fertilizers.map((f, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300">{f}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-green-600 mb-2">Recommended Pesticides</h3>
        <ul className="list-disc list-inside space-y-1">
          {data.pesticides.map((p, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300">{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
