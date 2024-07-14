export class Subsribable {
private subsribers: Set<() => void> = new Set();
  constructor(){}
  subsriber(cb: ()=> void) {
    this.subsribers.add(cb);
  }
}
