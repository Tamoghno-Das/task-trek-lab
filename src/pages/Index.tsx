const Index = () => {
  // Redirect to pure HTML/CSS/JS version
  window.location.href = '/index.html';
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-foreground">Redirecting to Task Manager...</p>
    </div>
  );
};

export default Index;
