import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.red.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.yellow.underline.bold)
    process.exit(1)
  }
}

export default connectDB