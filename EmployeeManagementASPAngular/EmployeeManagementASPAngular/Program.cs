using EmployeeManagementASPAngular.Model;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//builder.Services.AddDbContext<EmployeeContext>(options =>
//options.UseMySql(builder.Configuration.GetConnectionString("MySqlConnectionString")));
// Register the DbContext with the connection string from appsettings.json
builder.Services.AddDbContext<EmployeeContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("MySqlConnectionString"),
        new MySqlServerVersion(new Version(8, 0, 21)))); // Replace with your MySQL version

builder.Services.AddDbContext<ManagerContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("MySqlConnectionString"),
        new MySqlServerVersion(new Version(8, 0, 21))));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options => 
options.WithOrigins("http://localhost:4200")
.AllowAnyMethod()
.AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
