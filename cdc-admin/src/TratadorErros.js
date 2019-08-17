import PubSub from 'pubsub-js';

export default class TratadorErros{
     publicaErros(feedBack){
          for (let i = 0; i < feedBack.errors.length; i++) {
               var erro = feedBack.errors[i];
               PubSub.publish("erro-validacao",erro);
          }
          console.log(erro);  
     }
}