import { useState } from "react";
import { Check } from "lucide-react";

const SETTINGS_KEY = "arcadiaDashboardSettings";
const defaultPreferences = {
  eventUpdates: true,
  publicationUpdates: true,
};

const getSavedPreferences = () => {
  try {
    const savedPreferences = localStorage.getItem(SETTINGS_KEY);
    return savedPreferences
      ? { ...defaultPreferences, ...JSON.parse(savedPreferences) }
      : defaultPreferences;
  } catch {
    return defaultPreferences;
  }
};

const DashboardSettings = ({ user }) => {
  const [preferences, setPreferences] = useState(getSavedPreferences);
  const [isSaved, setIsSaved] = useState(false);

  const handlePreferenceChange = (event) => {
    setPreferences((currentPreferences) => ({
      ...currentPreferences,
      [event.target.name]: event.target.checked,
    }));
    setIsSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(preferences));
    setIsSaved(true);
  };

  return (
    <section className="bg-white p-6 shadow-md md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold">Settings</h2>
        <p className="mt-2 text-gray-600">
          Manage your account details and dashboard notifications.
        </p>
      </div>

      <div className="mb-8 border-b border-gray-200 pb-8">
        <h3 className="mb-4 text-lg font-semibold">Account</h3>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-gray-600">Name</dt>
            <dd className="mt-1 font-medium text-gray-900">{user.name}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Email</dt>
            <dd className="mt-1 font-medium text-gray-900">{user.email}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Role</dt>
            <dd className="mt-1 font-medium text-gray-900">{user.role}</dd>
          </div>
        </dl>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="mb-4 text-lg font-semibold">
            Email notifications
          </legend>
          <div className="space-y-4">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="eventUpdates"
                checked={preferences.eventUpdates}
                onChange={handlePreferenceChange}
                className="mt-1 h-4 w-4 accent-emerald-700"
              />
              <span>
                <span className="block font-medium text-gray-900">
                  Event updates
                </span>
                <span className="block text-sm text-gray-600">
                  Receive updates about Arcadia events.
                </span>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="publicationUpdates"
                checked={preferences.publicationUpdates}
                onChange={handlePreferenceChange}
                className="mt-1 h-4 w-4 accent-emerald-700"
              />
              <span>
                <span className="block font-medium text-gray-900">
                  Publication updates
                </span>
                <span className="block text-sm text-gray-600">
                  Hear when new research and reports are published.
                </span>
              </span>
            </label>
          </div>
        </fieldset>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="rounded-md bg-emerald-700 px-5 py-2.5 font-medium text-white transition-colors hover:bg-emerald-800"
          >
            Save preferences
          </button>
          {isSaved && (
            <p
              className="inline-flex items-center gap-2 text-sm text-emerald-700"
              role="status"
            >
              <Check className="h-4 w-4" aria-hidden="true" />
              Preferences saved
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default DashboardSettings;
