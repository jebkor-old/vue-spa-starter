import NProgress from 'nprogress';

NProgress.configure({ // nprogress settings
    showSpinner: false,
    trickleSpeed: 300
});

class LoadingService {
    private _idx = 0
    private _references = {}

    constructor() {
    }

    public startLoading(): () => void {
        var idx = this._idx++; // get a "unique" id for each time the function is called.
        var references = this._references; // make sure you retain the "this" reference.
        
        var fn = function() {
            delete references[idx]; // delete the right function from the "buffer" when it's done.
            
            // QUESTION: ANY OTHER LOADING ONGOING?
            if(Object.keys(references).length === 0 && references.constructor === Object) { // if object is empty...
                NProgress.done(); // ...finish the loader/progress bar
            }
        }

        this._references[idx] = fn; // add the function to the object

        NProgress.start(); // start the loader/progress bar
        return fn;
    }
}


export default new LoadingService(); // export the singleton class.