import { Injectable } from '@angular/core';
import { addDoc, collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { app } from 'src/environment/environment';
import { task } from '../modal/task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  db = getFirestore(app);

  constructor() { }

  // async deadline_getlist(){
  //   const deadlinesCol = collection(this.db, 'deadlines');
  //   const deadlineSnapshot = await getDocs(deadlinesCol);
  //   const deadLineList = deadlineSnapshot.docs.map(doc => doc.data());

  //   return deadLineList;
  // }

  async save_new_deadline(deadline: task) {

    if(!deadline) return;

    await setDoc(doc(this.db, "deadlines", "huashas"), {
      title: deadline.task_name,
      note: deadline.date,
      grade: deadline.desc
    });
    return 200;
  }
}
