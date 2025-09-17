const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-4">
        At Abila Peanut Butter, we value your privacy. We only collect personal information 
        necessary to process orders and improve your shopping experience.
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>We do not share your information with third parties without consent.</li>
        <li>Payment details (M-Pesa, Bank) are securely processed.</li>
        <li>You may request deletion of your personal data at any time.</li>
      </ul>
    </div>
  );
};
export default Privacy;
