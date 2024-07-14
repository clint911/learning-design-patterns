 export class Subsribable {
private subsribers: Set<() => void> = new Set();
  constructor(){}
  subsriber(cb: ()=> void): () => void {
    this.subsribers.add(cb);
  return () => {
       this.subsribers.delete(cb);
     }
   }
publish() : void {
     this.subsribers.forEach(cb => cb());

   }
}
