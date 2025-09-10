import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto mt-13 px-3 py-4">
      <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center p-4">
          <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full mb-3 md:mb-0 md:mr-4">
            <ZapIcon className="size-8 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold mb-1">Rate Limit Reached</h3>
            <p className="text-sm text-base-content mb-0.5">
              You've made too many requests in a short period. Please wait a
              moment.
            </p>
            <p className="text-xs text-base-content/70">
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
