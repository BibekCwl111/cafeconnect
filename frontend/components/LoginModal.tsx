type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onGoogleLogin: () => void;
};

export default function LoginModal({
  isOpen,
  onClose,
  onGoogleLogin,
}: LoginModalProps) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 w-[90%] max-w-md">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <h2 className="text-3xl font-bold">
            Login
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        {/* Google Login Button */}
        <button
          onClick={onGoogleLogin}
          className="bg-white text-black py-3 rounded-xl font-semibold w-full hover:bg-gray-200 transition"
        >
          Continue with Google
        </button>

      </div>

    </div>
  );
}