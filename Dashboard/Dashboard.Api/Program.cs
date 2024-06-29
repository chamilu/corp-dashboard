var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/greet", () => "Hello World!");

app.Run();
