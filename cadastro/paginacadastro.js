import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://xykdmkcmlqeotehelvmy.supabase.co', 'sb_publishable__AcS_cmtpzpgl4EG3xdB7g_BgmPujfw')

async function cadastrarPaciente(nome, celular, email) {
    const { data, error } = await supabase
        .from('pacientes')
        .insert([{ nome, celular, email }])
    
    if (error) console.error('Erro:', error)
    else alert('Paciente cadastrado com sucesso!')
}

window.onload = () => {
    document.getElementById('btnCadastrar').addEventListener('click', async (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const celular = document.getElementById('celular').value;
        const email = document.getElementById('email').value;

        await cadastrarPaciente(nome, celular, email);
    });
};