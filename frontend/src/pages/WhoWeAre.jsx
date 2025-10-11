import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import PartnersSection from "../components/PartnersSection";
import EventCarousel from "../components/EventCarousel";
const WhoWeAre = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header />
      {/* Mission Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Events Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            At Arcadia, we are committed to driving progress towards a circular
            economy by empowering companies, innovators, and communities to
            co-create sustainable solutions. We believe that sustainability is
            not just a goal but a journey that requires collaboration,
            innovation, and a shared commitment to creating a better future for
            our planet.
          </p>
        </div>
      </section>
      {/* Values Section */}

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div
              className="p-8 shadow-lg relative overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                  Innovation
                </h3>
                <p className="text-white">
                  We foster innovative solutions that address environmental
                  challenges while creating economic opportunities.
                </p>
              </div>
            </div>

            <div
              className="p-8 shadow-lg relative overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                  Collaboration
                </h3>
                <p className="text-white">
                  We connect stakeholders across sectors to co-create solutions
                  for a more sustainable future.
                </p>
              </div>
            </div>

            <div
              className="p-8 shadow-lg relative overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                  Knowledge Sharing
                </h3>
                <p className="text-white">
                  We provide resources and platforms for sharing best practices
                  and insights on circular economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      {/* Event Carousel Section */}

      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">
            Our Team
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-bold">Jane Doe</h3>
              <p className="text-emerald-600">Founder & CEO</p>
            </div>

            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-bold">John Smith</h3>
              <p className="text-emerald-600">Chief Sustainability Officer</p>
            </div>

            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-bold">Emily Johnson</h3>
              <p className="text-emerald-600">Head of Research</p>
            </div>

            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-bold">Michael Chen</h3>
              <p className="text-emerald-600">Community Manager</p>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default WhoWeAre;
