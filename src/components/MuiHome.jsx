import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Image from "next/image"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}))

const MuiHome = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            height: "50vh",
                            backgroundImage: `url("/home/heroBackground.jpg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <Paper
                            elevation={3}
                            variant="outlined"
                            sx={{
                                margin: "80px auto",
                                opacity: ".8",
                                width: "clamp(400px, 50%, 700px)",
                            }}
                        >
                            <Image
                                src="/home/GEC_Button.jpg"
                                width={4001}
                                height={1651}
                                alt="logo"
                                layout="responsive"
                            ></Image>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper
                            elevation={3}
                            variant="outlined"
                            sx={{
                                margin: "auto",
                                width: "100%",
                            }}
                        >
                            <Image
                                src="/home/savetheworld.jpg"
                                width={1897}
                                height={988}
                                alt="logo"
                                layout="intrinsic"
                            ></Image>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default MuiHome

{
    /* <Image
className={{ height: "50vh" }}
width={3648}
height={5742}
alt="stairs towards triangle ceiling"
src="/home/heroBackground.jpg"
layout="intrinsic"
objectFit="scale-down"
objectPosition="center"
/> */
}
