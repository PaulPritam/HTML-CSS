class EmployeePayroll
{
    id;
    name;
    profilePic;
    department;
    salary;
    startDate;
    note;
    gender;

    get gender() {
        return this.gender;
    }
    set gender(gender) {
        this.gender = value;
    }

     get Id() {
        return this.id;
    }

      set Id( id) {
        this.id = id;
    }

     get Name() {
        return this.name;
    }

      set Name( name) {
        this.name = name;
    }

     get ProfilePic() {
        return this.profilePic;
    }

      set ProfilePic( profilePic) {
        this.profilePic = profilePic;
    }

     get Department() {
        return this.department;
    }

      set Department( department) {
        this.department = department;
    }

     get Salary() {
        return this.salary;
    }

      set Salary( salary) {
        this.salary = salary;
    }

     get StartDate() {
        return this.startDate;
    }

      set StartDate( startDate) {
        this.startDate = startDate;
    }

     get Note() {
        return this.note;
    }

      set Note( note) {
        this.note = note;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? 'undefined' : this.startDate.toLocaleDateString('en-US', options);
        return "id=" + this.id + ", name=" + this.name + ", gender="
            + this.gender + ", profilePic=" + this.profilePic
            + ", departments=" + this.department + ", salary="
            + this.salary + ", startDate=" + empDate
            + ", note=" + this.note;
    }
}




const save =() =>
{
    try {
        let employeePayrollData = createEmployeePay

    } catch (error) {
        return;
    }
}

const resetform =() =>
{

}

const createEmployeePayroll = () =>
{
    let employeePayroll = new EmployeePayroll();
    try {
        employeePayroll.name = getInputValueById('#name')
    } catch (error) {
        
    }
}