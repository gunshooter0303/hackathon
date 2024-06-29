export default function About() {
  return (
    <section className="p-6 w-full border-t border-border">
      <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
      <p className="text-center max-w-2xl mx-auto">
        Our mission is to empower communities through education and awareness on
        climate change.
      </p>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4 text-center">Our Team</h3>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="text-center">
            <img
              src="/ulogo.png"
              alt="John Doe"
              className="rounded-full w-24 h-24 mx-auto shadow-lg"
            />
            <p className="mt-2 font-medium">Sai Kaushik</p>
            <p className="text-sm text-gray-600">Team Lead</p>
          </div>
          <div className="text-center">
            <img
              src="/ulogo.png"
              alt="Jane Smith"
              className="rounded-full w-24 h-24 mx-auto shadow-lg"
            />
            <p className="mt-2 font-medium">Jane Smith</p>
            <p className="text-sm text-gray-600">Environmental Scientist</p>
          </div>
          <div className="text-center">
            <img
              src="/ulogo.png"
              alt="Michael Johnson"
              className="rounded-full w-24 h-24 mx-auto shadow-lg"
            />
            <p className="mt-2 font-medium">Michael Johnson</p>
            <p className="text-sm text-gray-600">Sustainability Advocate</p>
          </div>
          <div className="text-center">
            <img
              src="/ulogo.png"
              alt="Emily Davis"
              className="rounded-full w-24 h-24 mx-auto shadow-lg"
            />
            <p className="mt-2 font-medium">Emily Davis</p>
            <p className="text-sm text-gray-600">Renewable Energy Specialist</p>
          </div>
        </div>
      </div>
    </section>
  );
}
