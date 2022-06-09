import javax.swing.JOptionPane;
public class Paginacao {
	static int memoria[]= new int[25];
	static String memoriaString[]= new String[25];
	public static void main (String args[]) {
		for(int i=0; i<25; i++)
		{
			memoria[i]=0;
		}
		int nprocesso;
		String nprocessoString;
		int numDePaginas=0;
		nprocessoString = JOptionPane.showInputDialog(null,"Quantos processos existirão?");
		nprocesso = Integer.parseInt(nprocessoString);
		int tamanhoDosProcessos[]= new int[nprocesso];
		int tamanhoprocesso;
		String tamanhoprocessoString;
		for (int i=0; i<nprocesso;i++)
		{
			tamanhoprocessoString = JOptionPane.showInputDialog(null,"Qual o tamanho do processo"+i+"?");
		    tamanhoprocesso = Integer.parseInt(tamanhoprocessoString);
		    tamanhoDosProcessos[i]=tamanhoprocesso;
		}
		for (int i=0; i<nprocesso;i++)
		{
			if (tamanhoDosProcessos[i]%4==0)
			{ 
				numDePaginas = tamanhoDosProcessos[i]/4;
			}
			if (tamanhoDosProcessos[i]%4!=0)
			{
				numDePaginas = (tamanhoDosProcessos[i]/4)+1;
			}
			for (int j=0; j<numDePaginas ;j++)
			{
				int pagOcupadaAtual;	
				pagOcupadaAtual = achaPaginaLivre();
				memoriaString[pagOcupadaAtual]="---------------\n| P"+i+"  pagina "+j+ "|"  ;
			}
		}
		achaPaginaLivre();
		mostraMemoria();
	}
   static int achaPaginaLivre()
	{
		int paginasorteada;
		double paginasorteadatemporaria=Math.random()*24;
		paginasorteada=(int)paginasorteadatemporaria;
		if(memoria[paginasorteada]==0)
		{
			memoria[paginasorteada]=1;
		}
		if(memoria[paginasorteada]==1)
		{
			while(memoria[paginasorteada]==1)
			{
				paginasorteada++;
				if(paginasorteada>24)
				{
					paginasorteada=0;
				}
			System.out.print(".");	
			}
			memoria[paginasorteada]=1;
		}
		return paginasorteada;
	}
	static void mostraMemoria()
		{
			for(int i=0;i<25;i++)
			{
				System.out.println(memoriaString[i]);
			}
		}
}