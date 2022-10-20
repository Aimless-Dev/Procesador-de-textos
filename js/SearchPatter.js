export class SearchPatter {
    constructor(txt, path){
        this.txt    = txt
        this.path   = path
        this.count  = 0
    }

    search(){
        let m = this.path.length
        let n = this.txt.length

        let lps = []

        for (let i = 0; i < m; i++){
            lps.push(0)
        }
        
        let j   = 0
        let i   = 0

        this.prossesPatter(this.path, m, lps)

        while(i < n){
            if (this.path[j] == this.txt[i]){
                i++
                j++
            }

            if (j == m){
                console.log('Patrón encontrado en el índice ', i - j)
                j = lps[j - 1]
                this.count++
            }

            if (i < n && this.path[j] != this.txt[i]){
                if (j != 0){
                    j = lps[j - 1]
                }
                else {
                    i++
                }
            }
        }
    }

    prossesPatter(path, m, lps){
        let i   = 1
        let len = 0

        while(i < m){
            if (path[i] == path[len]){
                len++
                lps[i] = len
                i++
            } else {
                if (len != 0){
                    len = lps[len - 1]
                }else {
                    lps[i] = 0
                    i++
                }
            }
        }
    }

    totalSearch(){
        return this.count
    }

}