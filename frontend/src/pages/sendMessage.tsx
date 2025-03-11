import { useState } from "react";
import ScaleUpDiv from "../components/scaleupDiv";

interface FormData {
  message: string;
  error?: string;
}

const SendMessage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    message: "",
    error: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ScaleUpDiv title="Send Message">
      <form onSubmit={handleSubmit} className="step-1 mt-8">
        {formData.error && (
          <div className="form-control font-neucha bg-red-500 py-1 text-center text-sm">
            <p>{formData.error}</p>
          </div>
        )}

        <div className="grid gap-6 mt-8">
          <div className="flex flex-col gap-2">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message...no one has to know"
              className="w-full courgette-regular bg-transparent px-3 py-2 text-white placeholder:text-grey border-2 border-grey rounded-lg outline-none"
            ></textarea>
            <span className="text-grey text-sm font-neucha">
              Enter your message.
            </span>
          </div>
          <div>
            <button type="button" className="font-lobster w-full py-2 bg-purple bs-1 rounded-2xl">Send Message</button>
          </div>
        </div>
      </form>
    </ScaleUpDiv>
  );
};

export default SendMessage;
