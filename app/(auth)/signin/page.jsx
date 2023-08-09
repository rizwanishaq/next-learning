"use client";
import AuthForm from "@components/AuthForm";

const SignInPage = () => {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <main>
      <h2 className="text-center">Sign In</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
};

export default SignInPage;
