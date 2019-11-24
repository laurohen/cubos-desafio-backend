
const agendaRoutes = (app, fs) => {

    
    const dataPath = './data/agenda.json';

    
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

   
    //Atendimento dia especifico param - Data agenda day = padrao DD-MM-AAAA , IntervalStart , IntervalEnd , diariamente = false , semanalmente = false 

    //Atendimento diariamente param - day = 00-00-0000 , IntervalStart , IntervalEnd , diariamente = true , semanalmente = false
    
    //Atendimento semanalmente param - day = 00-00-0000 , IntervalStart , IntervalEnd , diariamente = false , semnalmente = informe dias da semana (Ex: Segunda e Quarta)


    app.post('/agendasRegraAtendimento', (req, res) => {

        readFile(data => {
            const newUserId = Object.keys(data).length + 1;
            console.log(newUserId);

            console.log(req.body);
            
            data[newUserId.toString()] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('Cadastro de disponibilidade efetuado com sucesso');
            });
        },
            true);
    });


    // apagar uma regra especifica criada pelo endpoint descrito em "Cadastro de regra de atendimento"
    app.delete('/agendasRegraAtendimento/:id', (req, res) => {

        readFile(data => {

            const userId = req.params["id"];
            delete data[userId];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`Regra numero id:${userId} foi removida com sucesso`);
            });
        },
            true);
    });

    // metódo de listar regras de atendimento criadas pelo endpoint descrito em "Cadastro de regra de atendimento"
    app.get('/agendasRegraAtendimento', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    app.get('/agendasHorariosDisponiveis/:datastart&:dataend', (req, res) => {
        
        let paramBuscar = req.body
        console.log(paramBuscar)

        console.log('Data incial da busca : ' + paramBuscar.datastart )
        console.log('Data final da busca : ' + paramBuscar.dataend )
        
        // Verificar no intervalo apenas registros com :
        // day <> 00-00-0000
        // diariamente = false , semanalmente = false
        
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });




};


module.exports = agendaRoutes;

