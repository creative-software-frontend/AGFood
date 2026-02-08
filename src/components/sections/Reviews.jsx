export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">John Smith</h3>
            <div className="text-yellow-500 text-xl mb-3">★★★★★</div>
            <p className="text-gray-600">Exceptional food quality and service. Will definitely come back!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
            <div className="text-yellow-500 text-xl mb-3">★★★★★</div>
            <p className="text-gray-600">The flavors were amazing and the presentation was beautiful.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Michael Brown</h3>
            <div className="text-yellow-500 text-xl mb-3">★★★★★</div>
            <p className="text-gray-600">A wonderful dining experience. Highly recommended!</p>
          </div>
        </div>
      </div>
    </section>
  );
}