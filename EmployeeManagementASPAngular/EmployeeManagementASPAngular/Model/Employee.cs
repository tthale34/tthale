using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeManagementASPAngular.Model
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }
        
        [Column(TypeName="nvarchar(100)")]
        public string EmployeeName { get; set; } = "";
        
        [Column(TypeName = "nvarchar(100)")]
        public string EmployeeSurname { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string EmployeePosition { get; set; } = "";

        [Column(TypeName ="int")]
        public int EmployeeManagerId { get; set; } = 0;

    }
}
