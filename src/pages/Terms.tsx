const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground mb-4">
        By using our website, you agree to the following terms:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>All prices are in KSh and subject to change without notice.</li>
        <li>Orders are confirmed only after payment or arrangement with our team.</li>
        <li>We reserve the right to cancel fraudulent or invalid orders.</li>
      </ul>
    </div>
  );
};
export default Terms;
