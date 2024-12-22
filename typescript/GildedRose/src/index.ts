type Name =
    | 'normal'
    | 'Aged Brie'
    | 'Backstage passes to a TAFKAL80ETC concert'
    | 'Sulfuras, Hand of Ragnaros'
    | 'Conjured';

export class GildedRose {
    /**
     * Type of current rose
     */
    private name: Name;

    /**
     * Current quality
     */
    private quality: number;

    /**
     * Remaining days till sell date
     */
    private sellIn: number;

    public constructor(name: Name, quality: number, sellIn: number) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }

    /**
     * Return current quality
     */
    public getQuality(): number {
        return this.quality;
    }

    /**
     * Return days remaining till sell date
     */
    public getDaysRemaining(): number {
        return this.sellIn;
    }

    /**
     * Executes a day tick
     */
    public tick() {

        const maxQuality: number = 50;
        const minQuality: number = 0;
        
        if (this.name === 'Sulfuras, Hand of Ragnaros') {
            return
        }

        if (this.name === 'Backstage passes to a TAFKAL80ETC concert'){
            if (this.sellIn < 6) {
                this.quality += 3;
            } if (this.sellIn < 11) {
                this.quality += 2;
            }  if (this.sellIn > 10 ){ 
                this.quality += 1
            } this.sellIn--;
        }

        if (this.name === 'Aged Brie') {
             this.quality += 1;
             this.sellIn--;
        }

        if (this.name === 'normal') {
            this.quality -= this.sellIn < 0 ? 2 : 1;
            this.sellIn--;
        }

        if (this.name === 'Conjured') {
            this.quality -= this.sellIn < 0 ? 4 : 2;
            this.sellIn--;
        }
        
        // quality
        if (this.quality > maxQuality){
            this.quality = maxQuality;
        }

        if (this.quality < minQuality){
            this.quality = minQuality;
        }

    }
}
