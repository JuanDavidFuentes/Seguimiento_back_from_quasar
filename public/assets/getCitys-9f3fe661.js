import{a as n,r as u,g as o}from"./index-e4cc669c.js";const{getToken:i,token:g}=n();i();const h=()=>{const e=u([]);return{getData:async()=>{try{const{data:t}=await o.get("/ciudades/CiudadDepartamento");e.value=t.ciudad}catch(t){console.log(t)}},crearCiudadPost:async(t,r,s,c)=>{try{let a={headers:{token:g}};const{data:d}=await o.post("/ciudades/",{coddepartamento:r,departamento:t,ciudad:s,codciudad:c},a);return d}catch(a){return a}},citys:e}};export{h as u};