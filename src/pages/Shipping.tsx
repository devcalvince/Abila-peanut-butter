const Shipping = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
      <p className="text-muted-foreground mb-4">
        We aim to deliver your peanut butter fresh and on time.
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>🚚 Eldoret Town – Free delivery for 2+ jars (same day)</li>
        <li>📦 Outside Eldoret – KSh 100–250 (1–3 working days)</li>
        <li>Orders are processed within 24 hours of confirmation.</li>
      </ul>
    </div>
  );
};
export default Shipping;
