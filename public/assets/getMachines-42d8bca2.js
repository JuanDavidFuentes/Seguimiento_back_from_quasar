import{a as h,r as d,g as c}from"./index-e5d93ad7.js";const{getToken:l,token:s}=h();l();const q=()=>{const i=d([]);return{getData:async()=>{try{const{data:a}=await c.get("/maquinas");i.value=a}catch(a){console.log(a)}},crearMachinePost:async(a,t,e,o)=>{try{let r={headers:{token:s}};const{data:n}=await c.post("/maquinas/",{nombre:a,serial:t,af:e,estadoMaquina:o.value},r);return n}catch(r){return r}},editarMachinePut:async(a,t,e,o,r)=>{try{let n={headers:{token:s}};const{data:u}=await c.put(`/maquinas/${a}`,{nombre:t,serial:e,af:o,estadoMaquina:r.value},n);return u}catch(n){return n}},inactivarMachine:async a=>{try{let t={headers:{token:s}};const{data:e}=await c.put(`maquinas/desactivar/${a}`,{},t);return e}catch(t){console.log(t)}},activarMachine:async a=>{try{let t={headers:{token:s}};const{data:e}=await c.put(`maquinas/activar/${a}`,{},t);return e}catch(t){console.log(t)}},machines:i}};export{q as u};