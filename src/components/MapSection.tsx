const MapSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-3xl font-bold text-center text-primary mb-8">Location</h2>
      <div className="w-full overflow-hidden rounded-sm">
        <iframe
          src="https://www.google.com/maps?ll=33.979286,-6.825975&z=15&t=m&hl=fr&gl=MA&mapclient=embed&cid=7596050715238481508&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ENS Rabat Location"
        />
      </div>
    </div>
  </section>
);

export default MapSection;
