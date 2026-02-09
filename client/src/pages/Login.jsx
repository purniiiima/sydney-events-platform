export default function Login() {
  return (
    <div style={{ padding: 40 }}>
      <a href={`${import.meta.env.VITE_API_URL}/auth/google`}>
        Login with Google
      </a>
    </div>
  );
}
