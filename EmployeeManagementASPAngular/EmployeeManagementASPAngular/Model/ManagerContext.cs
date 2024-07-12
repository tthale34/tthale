using Microsoft.EntityFrameworkCore;

namespace EmployeeManagementASPAngular.Model
{
    public class ManagerContext : DbContext
    {
        public ManagerContext(DbContextOptions<ManagerContext> options) : base(options) { }

        public DbSet<Manager> Managers { get; set; }
    }
}
