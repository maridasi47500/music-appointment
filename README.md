# music rdv app
:musical_note:  :date: :pushpin: :pencil2:

avec firebase

* src/environments/environment.ts
doit avoir
```
export const environment = {
          production: false,
          firebaseConfig: {
                    apiKey: "xx",
                      authDomain: "xx",
                        databaseURL: "xx",
                          projectId: "xx",
                            storageBucket: "xx",
                              messagingSenderId: "xx",
                                appId: "xxx"
          }
};
```
*  et src/environments/prod-environment.ts
doit avoir :

```
export const environment = {
          production: true,
          firebaseConfig: {
                    apiKey: "xx",
                      authDomain: "xx",
                        databaseURL: "xx",
                          projectId: "xx",
                            storageBucket: "xx",
                              messagingSenderId: "xx",
                                appId: "xxx"
          }
};
```
- faire  un 
```
npm i --legacy-peer-deps
```
avant de le lancer

* enjoy
# music-appointment
