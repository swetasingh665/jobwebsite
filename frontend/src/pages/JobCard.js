export default function JobCard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Latest Jobs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-5">
              <img
                src={job.logo}
                alt={job.company}
                className="w-16 h-16 rounded-xl object-cover"
              />

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {job.title}
                </h2>
                <p className="text-gray-500 font-medium">{job.company}</p>
              </div>
            </div>

            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">📍 Location:</span>{" "}
                {job.location}
              </p>

              <p>
                <span className="font-semibold">💰 Salary:</span>{" "}
                {job.salary}
              </p>

              <p>
                <span className="font-semibold">🧑‍💻 Experience:</span>{" "}
                {job.experience}
              </p>
            </div>

            <div className="mt-5 flex justify-between items-center">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                {job.type}
              </span>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
