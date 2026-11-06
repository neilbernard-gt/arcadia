import { ArrowUpRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const publications = [
  {
    title: "Market Analysis",
    description:
      "Research on sustainability trends, opportunities, and the transition to a circular economy.",
    category: "Research",
  },
  {
    title: "Position Papers",
    description:
      "Informed perspectives on sustainability challenges, policy, and strategic action.",
    category: "Insights",
  },
  {
    title: "Waste Reports / Manifestos",
    description:
      "Assessments of waste management practices and opportunities for improvement.",
    category: "Reports",
  },
];

const DashboardPublications = () => (
  <section className="bg-white p-6 shadow-md md:p-8">
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-serif font-bold">Publications</h2>
        <p className="mt-2 text-gray-600">
          Research and insights from Arcadia.
        </p>
      </div>
      <Link
        to="/publications"
        className="inline-flex items-center gap-2 font-medium text-emerald-700 hover:text-emerald-800"
      >
        View publications page
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>

    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {publications.map((publication) => (
        <article
          key={publication.title}
          className="flex gap-4 py-5 first:pt-5 last:pb-5"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-emerald-50 text-emerald-700">
            <FileText className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-medium text-emerald-700">
              {publication.category}
            </p>
            <h3 className="mt-1 font-semibold text-gray-900">
              {publication.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              {publication.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default DashboardPublications;
