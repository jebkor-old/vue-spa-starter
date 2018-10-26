import * as toastr from 'toastr';

// TODO: Configure toastr to your hearts content!
// https://github.com/CodeSeven/toastr

toastr.options.positionClass = "toast-bottom-right";

class Notify {
   public notify(level: string, msg: string, title?: string, overrides?: ToastrOptions) {
      toastr[level](msg, title, overrides);
   }

   public error(msg: string, title?: string, overrides?: ToastrOptions) {
      this.notify("error", msg, title, overrides);
   }

   public info(msg: string, title?: string, overrides?: ToastrOptions) {
      this.notify("info", msg, title, overrides);
   }

   public success(msg: string, title?: string, overrides?: ToastrOptions) {
      this.notify("success", msg, title, overrides);
   }

   public warning(msg: string, title?: string, overrides?: ToastrOptions) {
      this.notify("warning", msg, title, overrides);
   }

   public clear(msg: string, title?: string, overrides?: ToastrOptions) {
      toastr.clear();
   }
}


export default new Notify();