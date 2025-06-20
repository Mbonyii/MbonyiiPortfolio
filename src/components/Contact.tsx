import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeoklqav"; // Updated to user's actual Formspree endpoint

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Feel free to reach out for collaborations, questions, or just to say hello!
          </p>
        </div>
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
            <CardDescription className="text-gray-300">
              I will get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-green-400 text-center py-8">
                Thank you for your message! I will reply soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white mb-1" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-white mb-1" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-white mb-1" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {error && <div className="text-red-400">{error}</div>}
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  disabled={loading}
                >
                  <Send className="mr-2" size={20} />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
            <div className="mt-8 border-t border-white/10 pt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-white">
                <Mail size={18} />
                <span>mbonyiiinaguel@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone size={18} />
                <span>+250790705676</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
