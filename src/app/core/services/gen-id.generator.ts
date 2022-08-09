export class GenId {
    private id = 0;

    generate(): number {
        return this.id++;
    }
}