namespace Subjects {
  export class Subject {
    teacher!: Teacher;  // Definite assignment assertion means "I know this will be assigned"

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

