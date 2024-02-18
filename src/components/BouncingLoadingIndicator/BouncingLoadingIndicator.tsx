export default function BouncingLoadingIndicator() {
  return (
    <div className="flex justify-center bouncing-loader gap-2">
      <div
        className="bg-blue-500 w-3 h-3 rounded-full animate-bounce"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="bg-blue-500 w-3 h-3 rounded-full animate-bounce"
        style={{ animationDelay: "200ms" }}
      ></div>
      <div
        className="bg-blue-500 w-3 h-3 rounded-full animate-bounce"
        style={{ animationDelay: "500ms" }}
      ></div>
    </div>
  );
}
