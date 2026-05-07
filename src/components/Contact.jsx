/**
 * ContactForm Component
 * Accessible form with labeled inputs and keyboard navigation.
 */
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const divVariants = {
  hidden: {
    opacity: 0, 
    scale: 0.5
  },
  visible: {
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.1
    }
  }
}
export default function ContactForm(){
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setFormData({ name: "", email: "", message: "" });
            setSubmitted(true);
        } 
        catch (err) {
            console.log(err);
            alert("Failed to send message, try again.");
        }
    };

    return (
        <AnimatePresence mode="wait">
            {submitted ? (
            <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{duration: 0.3, delay: 0.1}}
                exit={{ opacity: 0, scale: 0.5 }}
                className="bg-white w-full min-h-80 rounded-2xl border flex flex-col items-center gap-3 py-12 text-center"
                role="status"
                aria-live="polite"
            >
                <CheckCircle className="h-12 w-12 text-success" aria-hidden="true" />
                <h3 className="text-2xl font-heading text-foreground">Message Sent!</h3>
                <p className="text-lg font-normal text-muted-foreground">
                    Thank you for reaching out. We'll get back to you soon.
                </p>
                <Button variant="outline" className={"text-sm mt-10 py-5 px-7 hover:text-white hover:bg-accent transition-colors duration-400"} size="lg" onClick={() => setSubmitted(false)}>
                    Send another message
                </Button>
            </motion.div>
            ) : (
            <motion.form
                onSubmit={handleSubmit}
                key="contact-form"
                variants={divVariants}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ once: true }}
                className="bg-white w-full min-h-120 rounded-2xl border shadow-lg p-6 md:p-8"
            >
                {/* Name field */}
                <div className="grid w-full mb-5 items-center gap-3">
                    <Label htmlFor="contact-name">Full Name</Label>
                    <Input 
                        type="text" 
                        id="Name" 
                        placeholder="Enter your name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        autoComplete="name"
                        required
                        name="name"
                    />
                </div>
                {/* Email field */}
                <div className="grid w-full mb-5 items-center gap-3">
                    <Label htmlFor="Email">Email Address</Label>
                    <Input 
                        type="email" 
                        id="Email" 
                        placeholder="Enter your email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        autoComplete="email"
                        required
                        name="email"
                    />
                </div>
                {/* Message field */}
                <div className="grid w-full gap-3">
                    <Label htmlFor="message">Your message</Label>
                    <Textarea 
                        placeholder="Type your message here." 
                        id="message" 
                        className={"mb-5"} name="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        required
                        rows={4}
                    />
                    <Button type="submit" className={"bg-primary font-semibold text-base py-5 hover:bg-primary/90 transition-colors"}>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Send message
                    </Button>
                </div>
            </motion.form>
            )}
            
        </AnimatePresence>
    );
};


