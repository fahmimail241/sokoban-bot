for(n of(F=require('fs')).readdirSync(I='/input/')){t=F.readFileSync(I+n+'/level.txt');D={d:w=t.indexOf(10)+1,u:-w,l:-1,r:1};p=t.indexOf(64,s='');C=t.map((c,i)=>(c%6||(S[i%w&8|i>p]||=[]).push(i),c%35<8),S=[]);T=e=>b.map(x=>C[x]=e)
S.map(B=>{for([b,p,s]of Q=[[B,p,s]]){T(2);R={[p]:s};K=[m=p];L=[]
for(u of K)for(j in D)q=R[u]+j,C[v=u+(d=D[j])]?C[v]>1>C[v+d]&&L.push([b.map(z=>z-v?z:v+d),v,q]):v in R||(R[v]=q,K.push(v),v<m?m=v:0)
if(b.every(x=>t[x]&2,T(1)))break
S[C+m]||=Q.push(...L)
T(0)}})
F.mkdirSync(O='/output/'+n);F.writeFileSync(O+'/solution.txt',s)}