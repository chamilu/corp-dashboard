var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
    options.AddDefaultPolicy(builder =>
        builder.WithOrigins("*")
            .AllowAnyHeader()
            .AllowAnyMethod()));

var app = builder.Build();

app.UseCors();

app.MapGet("/greet", () => "Hello World!");

app.MapGet("/stock", () =>
{
    return new Info("completed");
});

app.MapGet("/credit", () =>
{
    return new Info("completed");
});

app.Run();

record Info(string status);