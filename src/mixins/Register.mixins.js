export default{
    methods:{
        CheckPassword(inputtxt) {
            var decimal =
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            console.log(decimal.test(inputtxt) + "cinsill");
            return decimal.test(inputtxt);
          },
    }
}