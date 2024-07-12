using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeManagementASPAngular.Model
{
    public class Manager
    {
        [Key]
        public int ManagerId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string ManagerName { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string ManagerSurname { get; set; } = "";

        [Column(TypeName = "nvarchar(50)")]
        public string ManagerDepartment { get; set; } = "";
    }
}
